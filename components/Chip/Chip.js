export function Chip(props) {
  const { children, icon } = props;
  return (
    <div className="shadow-sm py-[4px] px-[10px] mt-[16px] mr-4 rounded-full flex justify-center items-center text-tiny font-bold text-custom_black-700 border border-custom_black-500">
      {icon ? <div className="mr-[8px]">{icon}</div> : ""}
      {children}
    </div>
  );
}
