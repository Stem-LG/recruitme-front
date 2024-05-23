"use server"

import { parseJwt } from "@/lib/utils";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const TOKEN_EXPIRY = 60 * 60 * 24 * 7 * 1000;

export async function login(formData: FormData) {
  const res = await fetch("http://127.0.0.1:3000/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (res.status === 200) {

    const { token } = await res.json();

    cookies().set("jwt", `${token}`, {
      expires: new Date(Date.now() + TOKEN_EXPIRY),
    });

    return redirect("/recruiter/offers",);
  }

  return redirect("/login?status=failed");
}



export async function register(formData: FormData) {

  const res = await fetch("http://127.0.0.1:3000/auth/register", {
    method: "POST",
    body: JSON.stringify({
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    }),
    headers: {
      "Content-Type": "application/json",
    }
  });

  if (res.status === 200) {

    const { token } = await res.json();

    cookies().set("jwt", `${token}`, {
      expires: new Date(Date.now() + TOKEN_EXPIRY),
    });

    return redirect("/recruiter/offers",);
  }

  return redirect("/register?status=failed");

}


export async function getAuth({ required = true }: { required?: boolean } = {}) {

  if (cookies().has("jwt")) {

    const token = cookies().get("jwt").value;

    return parseJwt(token);

  }

  if (required) {

    return redirect("/login");

  }

  return null;

}



export async function logout() {

  cookies().delete("jwt");

  return redirect("/offers");

}