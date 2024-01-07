import {useState, useEffect} from 'react';

const initialFormValues = {fullname: "", phone_number: ""};

function Form({ addContact, contacts }) {
  //*form için bir useState oluşturduk ve dışarı oluşturduğumuz objeyi içine ekledik.Birden fazla input için işlem yapmamış olduk
  const [form, setForm] = useState(initialFormValues);
  
  //*useEffect ile input içindeki değerler değişdiğinde yakalayıp boşa çekmiş olduk.
  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  //*Input içine girilen bilgileri form içindekileri kaybetmeden atamış olduk
  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  //*Girilen bilgileri
  const onSubmit = (e) => {
        e.preventDefault(); // Formun varsayılan davranışını engelledik

        //Girilen bilgilerin boş olmamasını sağladık.
        if (form.fullname === '' || form.phone_number === '') {
           return false;
        }

        //addContact ile contacts'daki bilgileri tutup içine yazılacak olan form bilgilerini eklemiş olduk.
        addContact([...contacts, form]);
        
    };



  return (
    //Gönderilen bilgileri yakalamak için form'a onSubmit ekledik
    <form onSubmit={onSubmit}>
        <div>
            <input 
                name='fullname'
                placeholder='Full Name'
                value={form.fullname}
                onChange={onChangeInput}
                className='ınput'
            /> 
        </div>
        <div>
            <input
                name='phone_number'
                placeholder='Phone Number'
                value={form.phone_number}
                onChange={onChangeInput}
                className='ınput'
            />
        </div>
      
        <div className='Btn' >
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form;
