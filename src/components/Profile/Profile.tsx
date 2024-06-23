import "./Profile.css";

export default function Profile({ username, bgColor }: ProfileProps) {
  return (
    <div className="profile" style={{ backgroundColor: bgColor }}>
      {username}
    </div>
  );
}
