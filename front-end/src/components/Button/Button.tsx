interface IButton {
  txtButton: string;
  onClickButton?: React.MouseEventHandler<HTMLButtonElement>;
  widthButton: string;
}

export const Button = ({ txtButton, onClickButton, widthButton }: IButton) => {
  return (
    <div>
      <button
        className={`${widthButton} h-12 bg-[#EC622C] text-white rounded-lg cursor-pointer mt-5 font-extrabold`}
        type="submit"
        onClick={onClickButton}
      >
        {txtButton}
      </button>
    </div>
  );
};
