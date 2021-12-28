import type { NextPage } from 'next'
import SafeEnvironment from '@styles/components/SafeEnvironment/SafeEnvironment'
import PageTitle from '@styles/components/data-display/PageTitle/PageTitle'
import UserInformation from '@styles/components/data-display/UserInformation/UserInformation'
import TextFieldMask from 'ui/styles/components/inputs/TextFieldMask/TextFieldMask';
import { Button, Typography, Container } from '@mui/material';
import {
  FormElementsContainer,
  ProfissionaisPaper,
  ProfissionaisContainer,
} from '@styles/pages/index.style';
import useIndex from 'data/hooks/pages/useIndex.page';

const Home: NextPage = () => {

  const { cep, setCep, cepValido } = useIndex();

  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={'Conheça os Profissionais'}
        subtitle={'Preencha seu endereço e veja todos os profissionais da sua localidade.'}
      />

      <Container>
        <FormElementsContainer>
          <TextFieldMask
            mask={'99.999-999'}
            label={'Digite seu CEP'}
            fullWidth
            variant={'outlined'}
            value={cep}
            onChange={(event) => setCep(event.target.value)}
          />
          {cepValido}
          <Typography color={'error'}> CEP inválido </Typography>

          <Button
            variant={'contained'}
            color={'secondary'}
            sx={{ width: '220px' }}
          > Buscar
          </Button>
        </FormElementsContainer>

        <ProfissionaisPaper>
          <ProfissionaisContainer>
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
          </ProfissionaisContainer>
        </ProfissionaisPaper>
      </Container>
    </div>
  );
}

export default Home;
