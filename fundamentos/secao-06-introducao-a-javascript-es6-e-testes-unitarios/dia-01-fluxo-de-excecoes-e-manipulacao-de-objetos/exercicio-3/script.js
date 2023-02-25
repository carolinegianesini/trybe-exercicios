const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        marguerita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        },
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        },
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      },
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
    // Adicione abaixo as informações necessárias.
    const message = `Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, ${order.address.street}, Nº ${order.address.number}, AP: ${order.address.apartment}`
    console.log(message);
  };
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    // Adicione abaixo as informações necessárias.
    const novoPedido = Object.assign({},order);
    novoPedido.name = 'Luiz Silva';
    novoPedido.payment.total = 50;
    const sabores = Object.keys(novoPedido.order.pizza);
    const bebida = novoPedido.order.drinks.coke.type;
    const valor = novoPedido.payment.total;
    const resumoPedido = `Olá ${novoPedido.name}, o total do seu pedido de ${sabores[0]}, ${sabores[1]} e ${bebida} é R$ ${valor},00.`;
    console.log(resumoPedido);
  };
  
  orderModifier(order);