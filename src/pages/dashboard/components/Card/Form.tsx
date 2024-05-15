import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { iDataCard } from '../../../../types/Cards';
import { PatternFormat } from 'react-number-format';
import { useDashboardContext } from '../../../../hooks/useDashboardContext';

interface iFormNewCard {
  closeModal: () => void;
}

const FormNewCard = ({ closeModal }: iFormNewCard) => {
  const { createCard } = useDashboardContext();

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

  const handleCreateCard = async (data: iDataCard) => {
    const newCard: iDataCard = {
      type: data.type,
      userName: data.userName,
      password: data.password,
      validate: data.validate,
    };
    createCard(newCard);
    closeModal()
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleCreateCard)}>
      <div className="form-group">
        <label htmlFor="cardNumber">Card number</label>
        <div className="input-wrapper">
          <PatternFormat
            format="#### #### #### ####"
            allowEmptyFormatting
            mask="_"
            {...register('password')}
            onValueChange={(e) => setValue('password', e.value)}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="fullName">Name on card</label>
        <div className="input-wrapper">
          <input
            type="text"
            placeholder="Enter full name"
            {...register('userName')}
          />
          {errors.userName && <span>{errors.userName.message}</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="validate">Expiry Date</label>
        <div className="input-wrapper">
          <input
            type="date"
            placeholder="Enter validate"
            {...register('validate')}
          />
          {errors.validate && <span>{errors.validate.message}</span>}
        </div>
      </div>
      <div className="form-group">
        <label htmlFor="type">Card type</label>
        <select {...register('type')}>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>

      <button disabled={isSubmitting} type="submit">
        Add card
      </button>
    </form>
  );
};

export default FormNewCard;
