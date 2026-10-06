export interface DemoItem {
    id: string
    title: string
    description: string
    emoji: string
    color: string
    route: string
}

export interface ConceptItem {
    id: string
    title: string
    subtitle: string
    icon: string
}

export interface ConceptCategory {
    title: string
    items: ConceptItem[]
}
