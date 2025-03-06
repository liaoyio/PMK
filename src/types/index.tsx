export interface Props {
  children: Readonly<React.ReactNode>
  params: Promise<{ locale: string }>
}
