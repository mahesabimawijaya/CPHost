import { useEffect } from "react";
import { useAppDispatch } from "../../lib/redux/hooks";
import { keepLogin } from "../../lib/redux/auth.middleware";

export default function AuthProvider({
  children,
}: {
  children?: React.ReactNode;
}) {
  const dispatch = useAppDispatch();

  const fetchUser = async () => await dispatch(keepLogin());

  useEffect(() => {
    fetchUser();
  }, []);

  return children;
}
