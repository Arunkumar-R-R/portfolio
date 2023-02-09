export function Chip(props) {
  const { children, icon } = props;
  return (
    <div className=" py-[2px] px-[12px] mr-4 mb-2 rounded-full flex justify-center items-center text-tiny text-custom_black-800 border border-custom_black-500">
      {children}
    </div>
  );
}
