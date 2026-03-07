import { Spin } from "antd";
import "./RouteFallback.css";

export default function RouteFallback() {
  return (
    <div className="loader">
      <Spin size="large" />
    </div>
  );
}
