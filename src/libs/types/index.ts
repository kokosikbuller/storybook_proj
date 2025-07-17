export type Nullable<T> = T | null;

export type SideBarItem = {
	label: string
	children?: SideBarItem[]
}