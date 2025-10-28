export default function Alert({ children, type = "info" }) {
  // type puede ser: "success", "warning", "error", "info"
  const alertClasses = {
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-error",
    info: "alert-info"
  };

  return (
    <div className={`alert ${alertClasses[type]} shadow-lg`}>
      <div>
        <span className="text-xl"></span>
        <span>{children}</span>
      </div>
    </div>
  );
}