import { Wrapper } from "../_components/common/Wrapper";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Wrapper>{children}</Wrapper>;
}
