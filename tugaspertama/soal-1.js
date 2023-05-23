
let objek = {
    nama: "achmad fauzi suhandi",
    nim: "02042111001",
    email: "ahmaduziagustus2001@gmail.com",
  };

  let { nama, nim, email } = objek;
  console.log(nama);
  console.log(nim);
  console.log(email);

  const t1 = ["andri", "ahmad"];
  const t2 = ["helmi", "bagas"];
  const t3 = ["pazarudin", "dedam"];
  
  const friend = [...t1, ...t2, ...t3];
  console.log(friend);