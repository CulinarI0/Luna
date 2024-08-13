interface ButtonProps {
  label: String;
}

export default function Buttons({ label }: ButtonProps) {
  return (
    <button className="bg-[#F9EFE5] text-black font-semibold py-2 px-4 rounded hover:opacity-50">
      {label}
    </button>
  );
}
