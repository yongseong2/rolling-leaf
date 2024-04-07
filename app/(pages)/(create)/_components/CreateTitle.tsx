interface Props {
  label: string;
}

export function CreateTitle({ label }: Props) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-c0">{label}</h1>
    </div>
  );
}
