export default function Container({ children }) {
  return (
    <div className="w-full md:w-11/12 xl:w-full mx-auto px-2 lg:px-3 xl:max-w-screen-lg">
      {children}
    </div>
  );
}
