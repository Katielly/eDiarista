import type { NextPage } from 'next'
import SafeEnvironment from '@styles/components/SafeEnvironment/SafeEnvironment'
import PageTitle from '@styles/components/data-display/PageTitle/PageTitle'
import UserInformation from '@styles/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/styles/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade.'}
      />

      <TextFieldMask
        mask={'99.999-999'}
        label={'Digite seu CEP'}
        fullWidth
        variant={'outlined'}      //aula 02 tempo: 41:00 minutos
      />

      <Typography color={'error'}> CEP inválido </Typography>

      <Button
        variant={'contained'}
        color={'secondary'}
        sx={{ width: '220px' }}
      >
        Buscar
      </Button>

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
