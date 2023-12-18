
import SectionTittle from '../../../Component/SectionTittle/SectionTittle';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';

const Payment = () => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATWAY);
    return (
        <div>
        <SectionTittle heading="Payment" subHeading="Please pay to eat"></SectionTittle>
        <div>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    </div>
    );
};

export default Payment;