export function getStableUserId(): string {
    const KEY = "elevenlabs_user_id";
    if (typeof window === "undefined") return "server";
    let id = window.localStorage.getItem(KEY);
    if (!id) {
      id = crypto.randomUUID?.() ?? `${Date.now()}-${Math.random()}`;
      window.localStorage.setItem(KEY, id);
    }
    return id;
  }
  