import { Wrapper } from "../_components/common/Wrapper";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
