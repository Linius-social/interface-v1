interface AreaProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
}

export default function Area(props: AreaProps) {
  const { title, children, description } = props;

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold text-primary">{title}</h1>
      <p className="text-base text-default-500">{description}</p>
      {children}
    </div>
  );
}
