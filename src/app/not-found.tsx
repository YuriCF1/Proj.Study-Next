import Link from "next/link";

export default function NotFound() {
  return <div style={{ color: "#e8e8e8ff" }}>
    <h1>404 - Oops, I guess you got lost.</h1>
    <p>Clik <Link href="/">here</Link> to come back for the maing page</p>
  </div>
}
