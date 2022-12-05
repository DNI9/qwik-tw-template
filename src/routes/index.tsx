import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <h1>Hello Qwik</h1>
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.name,
  meta: [
    {
      name: "description",
      content: "Piped frontend built with Qwik framework",
    },
  ],
};
