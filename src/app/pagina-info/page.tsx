export default function Info() {
  return (
    <div>
      {/* Aqui vamos a practicar flexbox 
        -El primer ejercicio consiste en entender que hace container
      
        En este ejemplo, hemos aplicado la clase container al <div> que envuelve nuestro contenido. La clase mx-auto se utiliza para centrar horizontalmente el contenedor,
      
        -Styles Explicados 

        bg-slate-400 => coloca el color de fondo y su dureza
        mx-auto => centra el container 
        p-2 => Controle el relleno en todos los lados de un elemento utilizando las p-{size}utilidades.
        m-2 => Controle el margen en todos los lados de un elemento usando las m-{size}utilidades.
      */}

      <div className="container mx-auto bg-slate-200">
        <div className="bg-blue-500 p-2 m-2 text-center">1</div>
        <div className="bg-red-500 p-2 m-2 text-center">2</div>
        <div className="bg-blue-500 p-2 m-2 text-center">3</div>
      </div>

      {/* flex en Tailwind CSS te permite crear diseños flexibles y controlar la distribución y alineación de los elementos dentro de un contenedor. Puedes utilizar las clases de Tailwind para personalizar la apariencia y el comportamiento de los elementos secundarios en el contenedor flexible, logrando diseños fluidos y adaptables a diferentes pantallas y dispositivos.
      
      - Stylos Explicados

      px-4 => Controle el relleno horizontal de un elemento utilizando las px-{size}utilidades.



      py-4 => Controle el relleno vertical de un elemento utilizando las px-{size}utilidades.


      */}

      <div className="container flex mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>

      {/* Ahora pondremos lo mismo pero al reves usando la propiedad flex-row-reverse*/}
      <div className="container flex flex-row-reverse mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>

      {/* Ahora pondremos lo mismo pero al en columnas usando la propiedad flex-col-reverse*/}
      <div className="container flex flex-col-reverse mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Vamos a cambiarlo de lado sin modificar el orden con justify-end*/}
      <div className="container flex justify-end mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Si queremos centrarlo podemos usar justify center*/}
      <div className="container flex justify-center mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Podemos poner uno a cada lado usando justify-between*/}
      <div className="container flex justify-between mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
      {/* Cuando tenemos la etiqueta h en este caso h-64 toma un alto y centra segun ese alto
      solo cambiamos el justify-(center-end-top) podemos cambiar tambine el flex por rol o col*/ }
      <div className="container flex flex-rol m-0 h-64 justify-center mx-auto bg-slate-200">
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">1</div>
        <div className="bg-red-500 px-4 py-2 m-2 text-center">2</div>
        <div className="bg-blue-500 px-4 py-2 m-2 text-center">3</div>
      </div>
    </div>
  );
}
