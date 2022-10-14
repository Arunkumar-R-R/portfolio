export function Chip(props) {
  const { children, icon } = props;
  return (
    <div className="shadow-sm py-[6px] px-[12px] mt-[16px] mr-4 rounded-full flex justify-center items-center text-tiny font-bold text-custom_black-700 border border-custom_black-500">
      {children}
    </div>
  );
}
