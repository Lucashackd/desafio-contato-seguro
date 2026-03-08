import { Spin } from "antd";
import "./RouteFallback.css";

export default function RouteFallback() {
  return (
    <div className="route-fallback">
      <Spin size="large" />
    </div>
  );
}
