// eslint-disable-next-line react/prop-types
export default function Error({ mensaje }) {
  return (
    <div className="bg-red-100 mb-5 text-red-700 p-3 text-center rounded-md">
      <p>{mensaje}</p>
    </div>
  );
}
