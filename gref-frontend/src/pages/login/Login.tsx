import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../../utils/toast';

import Input from '../../components/input/input';
import Button from '../../components/button/button';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = handleSubmit(({ username, password }) => {
    const ADMIN_USER = {
      username: 'admin',
      password: 'admin',
    };

    if (username === ADMIN_USER.username && password === ADMIN_USER.password) {
      showToast('success', 'Welcome Admin!');
      return navigate('/home');
    } else {
      showToast('error', 'Invalid credentials');
    }
  });

  return (
    <section className="flex-center flex-col">
      <h1 className="text-2xl">Gref</h1>
      <h2 className="textlg">Login</h2>

      <form className="flex flex-col gap-5 mt-10" onSubmit={onSubmit}>
        <Input
          id="username"
          name="username"
          type="text"
          label="Username"
          htmlFor="username"
          required={true}
          register={register}
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          htmlFor="password"
          required={true}
          register={register}
        />

        <div className="mt-6">
          <Button name="Login" submit={true} />
        </div>
      </form>
    </section>
  );
};

export default Login;
