interface ButtonProps {
  label: String;
}

export default function Buttons({ label }: ButtonProps) {
  return (
    <button className="btn btn-sm">
      {label}
    </button>
  );
}
