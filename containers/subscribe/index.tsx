import { useRef, useState } from 'react';
import { Form, FormState } from '../../lib/types';
import ErrorMessage from '../../src/components/message/error';
import SuccessMessage from '../../src/components/message/success';
import LoadingSpinner from '../../src/components/spinner';

const Subscribe: React.FC = () => {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });
    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error,
      });
      return;
    }

    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`,
    });
  };

  return (
    <div className="bg-white text-gray-800 w-full md:w-1/2 lg:w-full shadow m-auto border border-t-8 border-b-8 border-black mt-20 flex flex-col rounded-xl">
      <form className="p-4 flex flex-col" onSubmit={subscribe}>
        <p className="my-4">Get notified when I take a dump in the morning.</p>
        <input
          ref={inputEl}
          className="p-1 w-full border-gray-200 bg-gray-50 text-sm"
          type="email"
          name="email"
          autoComplete="email"
          placeholder="your email is required"
          required
        />
        <button
          className="hover:bg-green-400 bg-gray-800 text-white m-auto my-4 px-6 py-2 text-lg rounded shadow-px-4 border-0"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        ''
      )}
    </div>
  );
};

export default Subscribe;
