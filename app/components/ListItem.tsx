export default function ListItem({ p1, p2 }) {
  return (
    <div className="flex">
      <p className="flex-[2]">{p1}</p>
      <p className="flex-[5]">{p2}</p>
    </div>
  );
}
