import Head from "next/head";
import { module } from "../module.js";

export default function Home() {
  return module.value;
}
