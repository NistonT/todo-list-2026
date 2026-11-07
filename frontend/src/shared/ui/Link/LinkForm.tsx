type Props = {
  label: string;
  text: string;
  onClick: () => void;
};

export const LinkForm = ({ label, text, onClick, ...props }: Props) => {
  return (
    <p className="text-center text-sm text-gray-500">
      {label}{" "}
      <button type="button" onClick={onClick} {...props} className="text-indigo-600 hover:text-indigo-700 font-medium">
        {text}
      </button>
    </p>
  );
};
