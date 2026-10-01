import type { User } from '../../../../common/types'

export interface UserCardProps {
    user: User
    onPress?: () => void
}
