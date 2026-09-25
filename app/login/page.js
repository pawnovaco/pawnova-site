"use client";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { createClient } from "../../lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const [loading,setLoading]=useState(false);

  async function login(e){
    e.preventDefault(); setError(""); setLoading(true);
    try {
      const supabase=createClient();
      const {error}=await supabase.auth.signInWithPassword({email,password});
      if(error) throw error;
      const next=search.get("next");
      router.replace(next && next.startsWith("/dashboard") ? next : "/dashboard");
      router.refresh();
    } catch(err){ setError(err?.message || "Unable to sign in."); }
    finally { setLoading(false); }
  }

  return <div className="login-shell">
    <section className="login-story">
      <a href="/" className="login-brand"><Image src="/pawnova-logo.png" width={132} height={92} alt="Paw Nova Co." priority/></a>
      <div className="login-story-copy">
        <span className="eyebrow">Paw Nova Workspace</span>
        <h1>The private side of Paw Nova.</h1>
        <p>This login protects the tools used to plan content, review drafts, manage schedules, and eventually monitor Paw Nova&apos;s products, subscribers, affiliate activity, and publishing workflow.</p>
        <div className="login-reason"><strong>Why login?</strong><span>The public site is for pet owners. This workspace contains internal business tools and should only be available to authorized Paw Nova users.</span></div>
      </div>
      <p className="login-foot">Private workspace · Paw Nova Co.</p>
    </section>
    <section className="login-form-wrap">
      <form className="login-card" onSubmit={login}>
        <span className="eyebrow">Authorized access</span>
        <h2>Sign in to the Command Center</h2>
        <p>Use the Paw Nova admin account created in Supabase Authentication.</p>
        <label>Email<input type="email" autoComplete="email" required value={email} onChange={e=>setEmail(e.target.value)} placeholder="you@pawnovaco.com"/></label>
        <label>Password<input type="password" autoComplete="current-password" required value={password} onChange={e=>setPassword(e.target.value)} placeholder="Your password"/></label>
        {error && <div className="login-error" role="alert">{error}</div>}
        <button className="button login-button" disabled={loading}>{loading?"Signing in…":"Sign in"}</button>
        <small>No public registration. Accounts are created by the Paw Nova owner.</small>
      </form>
    </section>
  </div>;
}
