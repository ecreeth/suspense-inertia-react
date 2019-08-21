import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { InertiaApp, InertiaLink as Link } from '@inertiajs/inertia-react'

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
            resolveComponent={name => React.lazy(() => import(`./pages/${name}`))}
          />
        </Suspense>
      </article>

    </main>
  )
};

ReactDOM.render(<App />, document.getElementById('app'));
