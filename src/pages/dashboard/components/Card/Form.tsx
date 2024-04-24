import { useEffect } from 'react';
import { useDashboardContext } from '../../../../contexts/DashboardContext';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { iDataCard } from '../../../../types/Cards';
import { PatternFormat } from 'react-number-format';

const FormNewCard = () => {
  const { getCards, createCard } = useDashboardContext();

  const schemaErrorMessages = {
    isRequired: 'Este campo é obrigatório',
    min5Characters: 'Este campo é obrigatório',
    onlyNumber: 'Apenas números',
  };

  const CardSchema = z.object({
    type: z.string(),
    userName: z.string(),
    password: z.string({ required_error: schemaErrorMessages.isRequired }),
    validate: z
      .string({ required_error: schemaErrorMessages.isRequired })
      .min(4, schemaErrorMessages.min5Characters),
  });

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      type: 'credit',
      userName: '',
      password: '',
      validate: '',
    },
    resolver: zodResolver(CardSchema),
  });

  useEffect(() => {
    getCards();
  }, []);

  const handleCreateCard = async (data: iDataCard) => {
    const newCard: iDataCard = {
      type: data.type,
      userName: data.userName,
      password: data.password,
      validate: data.validate,
    };
    createCard(newCard);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleCreateCard)}>
      <div className="form-group">
        <label htmlFor="type">Card's Type</label>
        <select {...register('type')}>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          placeholder="Enter full name"
          {...register('userName')}
        />
        {errors.userName && <span>{errors.userName.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="cardNumber">Card Number</label>

        <PatternFormat
          format="#### #### #### ####"
          allowEmptyFormatting
          mask="_"
          {...register('password')}
          onValueChange={(e) => setValue('password', e.value)}
        />

        {/* <input type="text" placeholder='Enter card number'  {...register('password')} /> */}
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="validate">Validate</label>
        <input
          type="date"
          placeholder="Enter validate"
          {...register('validate')}
        />
        {errors.validate && <span>{errors.validate.message}</span>}
      </div>

      <button disabled={isSubmitting} type="submit">
        create
      </button>
    </form>
  );
};

export default FormNewCard;
