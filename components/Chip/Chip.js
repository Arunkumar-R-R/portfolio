export function Chip(props) {
  const { children, icon } = props;
  return (
    <div className="bg-gray-100 py-1 px-4 mr-4 mb-2 rounded-full flex justify-center items-center text-tiny text-custom_black-800 border border-gray-300">
      {children}
    </div>
  );
}
