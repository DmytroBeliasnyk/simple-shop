import type {FC, ReactNode} from "react";

type LayoutProps = {
  header: 'Products' | 'Cart';
  children: ReactNode;
  footer?: ReactNode;
}

export const Layout: FC<LayoutProps> = ({header, children, footer}) => {
  return (
    <section
      className={`flex flex-1 flex-col justify-between
        bg-bg-secondary rounded-sm border-2 border-border-color`}
    >
      <header className="p-4 w-full bg-bg-surface text-2xl font-semibold">{header}</header>
      <main
        className={`flex flex-1 flex-col gap-2 px-2 py-4 overflow-y-scroll scrollbar-thin
         scrollbar-track-bg-secondary scrollbar-thumb-secondary
         hover:scrollbar-thumb-primary`}
      >{children}</main>
      <footer className="w-full p-4 bg-bg-surface">{footer}</footer>
    </section>
  )
}