import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Unhandled application error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F0F7F4] px-6 py-16 text-slate-800">
          <div className="mx-auto max-w-2xl rounded-3xl bg-white p-10 text-center shadow-lg">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-teal-600">
              Something went wrong
            </p>
            <h1 className="mb-4 text-4xl font-bold text-slate-900">
              We hit an unexpected error.
            </h1>
            <p className="mb-8 text-base leading-relaxed text-slate-600">
              Please refresh the page or head back home. The error has been
              logged in the browser console for debugging.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="rounded-full bg-teal-600 px-6 py-3 font-semibold text-white transition hover:bg-teal-700"
              >
                Refresh Page
              </button>
              <a
                href="/"
                className="rounded-full border border-slate-200 px-6 py-3 font-semibold text-slate-700 transition hover:bg-slate-50"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
