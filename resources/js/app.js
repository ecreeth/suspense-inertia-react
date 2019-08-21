import React, { Suspense, lazy } from "react";
import { render } from "react-dom";
import { InertiaApp, InertiaLink as Link } from "@inertiajs/inertia-react";

const app = document.getElementById("app");

function App(props) {
  return (
    <main>
      <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </header>

      <article>
        <Suspense fallback={<span>Loading...</span>}>
          <InertiaApp
            initialPage={JSON.parse(app.dataset.page)}
            resolveComponent={name =>
              lazy(() => import(`./pages/${name}`))
            }
          />
        </Suspense>
      </article>
    </main>
  );
}

render(<App />, app);
