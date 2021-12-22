import type { NextPage } from 'next'
import SafeEnvironment from '@styles/components/SafeEnvironment/SafeEnvironment'
import PageTitle from '@styles/components/data-display/PageTitle/PageTitle'
import UserInformation from '@styles/components/data-display/UserInformation/UserInformation'

const Home: NextPage = () =>  {
  return (
    <div>
        <SafeEnvironment />
        <PageTitle 
          title = {'Conheça os Profissionais'}
          subtitle = {'Preencha seu endereço e veja todos os profissionais da sua localidade.'}
         />
      <UserInformation
        name={'Akira Hanashiro'}
        picture={'https://github.com/hanashiro.png'}
        rating={3}
        description={'São Paulo'}
      />
      <UserInformation
        name={'Akira Hanashiro'}
        picture={'https://github.com/hanashiro.png'}
        rating={3}
        description={'São Paulo'}
      />
   </div>
  );
}

export default Home;
