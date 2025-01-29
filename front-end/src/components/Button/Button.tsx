interface IButton {
  txtButton: string;
  onClickButton?: (action: string) => void;
  widthButton: string;
}

export const Button = ({ txtButton, onClickButton, widthButton }: IButton) => {
  return (
    <div>
      <button
        className={`${widthButton} h-12 bg-[#EC622C] text-white rounded-lg cursor-pointer mt-5`}
        type="submit"
        onClick={() => onClickButton}
      >
        {txtButton}
      </button>
    </div>
  );
};
