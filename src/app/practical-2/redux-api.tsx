import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import React from 'react';
import { ActivityIndicator, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Spacing } from '@/common/theme';
import styles from '@/pages/practical-2/redux-api/redux-api-demo.style';

const ACCENT = '#6C63FF';

interface Post { id: number; title: string; }
interface PostsState { data: Post[]; loading: boolean; error: string | null; }

const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const { data } = await axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=8');
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: { data: [], loading: false, error: null } as PostsState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending,   state => { state.loading = true; state.error = null; })
      .addCase(fetchPosts.fulfilled, (state, action) => { state.loading = false; state.data = action.payload; })
      .addCase(fetchPosts.rejected,  (state, action) => { state.loading = false; state.error = action.error.message ?? 'Error'; });
  },
});

const store = configureStore({ reducer: { posts: postsSlice.reducer } });
type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const PostList: React.FC = () => {
  const { data, loading, error } = useSelector((s: RootState) => s.posts);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <View style={styles.container}>
      <View style={styles.conceptBox}>
        <Text style={styles.conceptTitle}>Redux + API (createAsyncThunk)</Text>
        <Text style={styles.conceptText}>
          1. <Text style={styles.bold}>createAsyncThunk</Text> — wraps async API call{'\n'}
          2. Auto dispatches pending/fulfilled/rejected{'\n'}
          3. <Text style={styles.bold}>extraReducers</Text> — handles thunk lifecycle{'\n'}
          4. <Text style={styles.bold}>useSelector</Text> — reads loading/data/error{'\n'}
          5. Clean, structured async pattern
        </Text>
      </View>
      <TouchableOpacity style={styles.fetchBtn} onPress={() => dispatch(fetchPosts())} disabled={loading}>
        <Text style={styles.fetchBtnText}>
          {loading ? '…Fetching' : data.length ? '↺ Refetch Posts' : '🚀 Fetch Posts'}
        </Text>
      </TouchableOpacity>
      {loading && <ActivityIndicator color={ACCENT} size="large" style={{ marginTop: Spacing.lg }} />}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}
      {data.length > 0 && !loading && (
        <FlatList
          data={data}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Text style={styles.postId}>#{item.id}</Text>
              <Text style={styles.postTitle} numberOfLines={2}>{item.title}</Text>
            </View>
          )}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: Spacing.md }}
        />
      )}
      <View style={styles.codeBox}>
        <Text style={styles.codeTitle}>Key Code</Text>
        <Text style={styles.code}>{`const fetchPosts = createAsyncThunk('posts/fetch', async () => {\n  const { data } = await axios.get('/posts')\n  return data\n})\n\n// In slice extraReducers:\n.addCase(fetchPosts.fulfilled, (state, action) => {\n  state.data = action.payload\n})`}</Text>
      </View>
    </View>
  );
};

export default function ReduxApiDemoScreen() {
  return <Provider store={store}><PostList /></Provider>;
}
