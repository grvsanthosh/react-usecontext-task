import React, { useState } from "react";
import Card from "./Card";
import Pricing from "./Pricing";
import "bootstrap/dist/css/bootstrap.min.css";
export const UserContext = React.createContext();

function App() {
  let [itemCount, setItemCount] = useState(0);
  let [pricecount, setPriceCount] = useState(0);
  let [products, setProducts] = useState([
    {
      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
      discountPercentage: 12.96,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAnAMBEQACEQEDEQH/xAAcAAABBAMBAAAAAAAAAAAAAAAAAwQFBgIHCAH/xABPEAABAgMEAwcMDwYHAAAAAAABAAIDBBEFBhIhBxMxFSI1QVFh0VJxcnN0kpOhsbKzwhQWIyUyNkJTVFWBgpGU4Rc3g8HD4iY0RUZkovD/xAAaAQEAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAMBEBAAICAQMBBwIFBQAAAAAAAAECAxEEEiExBRMiQXGBobFCwRU0UWGSFFOR4fH/2gAMAwEAAhEDEQA/AN4oBAIBAIBAIBAIBAIBAIBAIBAIBAIBAIBBhEiw4TS+K9rGja5xoEDbdWzvp8r4ZvSgN1bO+nyvhm9KA3Vs76fKeGb0oDdWzvp8r4ZvSgN1bO+nyvhm9KBSXnpSZcWy81AiuG0Q4gcfEgXqgHODQS40A2koGTrYstpo60pMEbax29KDzdqyvrOS/MM6UBu1ZP1nJfmGdKA3asn6zkvzDOlAbtWV9ZyX5hnSgUg2nIR3iHAnpaI87GsjNJP4FA7QCAQCDxzg1pc40AFSg54vteKetm03vMxEZBaA5sMOoGA7B16IK0YsxgLvZEYhuR90OXjQY6+P8/G8IUBr43z8bwhQGvj/AD8bwhQIzc7GgQS72RGDjk33Q7UEbLWnPysZkaBOTLXsdUHWk5/bVB01o2t+LeC77Y0y7FHhENL+raQCD19o+znQU2+UeZvdemZsczkaBZMgcMRkF1DFcMjX71RzYedFri8f219T4g0/Z/d0MBMKZc7nmYlfxqmpdL/RYvGvu1zbd0bVkbRmWS0jMRZQRHGDEacQLK5VNdtMj1lsphyX7Vhzc3Ey0tOq9kS6ybQb8KUjj7FYj0/lT4xyrTWY8sdzp0bZaKs/w3l/7ctU5aR5k5s6yIseOGzIdBh7C5xIp+C6Hp/pF73meTSemI8f1lWz8ylYiKT3Sc9YMtKy8WLCtb3RlMDA11Xmp2GpAoADnyrrV9I4mSYrGKY/v1eP+UK8qf6ts6E7zTlpSsayrRjPjGXZigxHmrqA0c0njGbSOuV5XmcaeLyL4ZnfT/7H2Xq26o22mqyQQCBtaP8AkJntL/IUHMlruLbRmGHMODK9cNCBnjOBzR8qlSeZBggEBsQRE5G10UkHejIIG6DoPQUfeKYbiFcMI05t8gibIIN8LyEGoM0/P+NFU6Rvbq+mfq+n7rBXJWYo65rOM1kMjlVzj+7O2bRuukXZ1hwJ+e1U1MwpaGBiL4mw0pltC6eXmWxY+qkbcjlY4im4jaJtGShPmH6qG1rW73ebDTjCu4MtopHVLznKprZkLP5lb9s81kmYtOkXaclhaahWMeTbbgyzErPoNbgvHNN5IL/UXjPXp3z7/T8Q9Px53jhvNcduCAQNrR4Pmu0v8hQcy2pq92n6/FqsTMeHbhwitOeifIe27uXui7cPXGSwimurXFx7c6KNOrXveWZ18EcpMBA0tCPqoeBp3z/EEEWgEG/9BLIe5Uw8O90MGC0ivyavIPjKCJsNrWXrvE1hq0TDgDza6KrHHjcy6vpf6/p+6x1yV2Kuw9hQxEfRwJyJwj5R5FPekMlprHZjMSILWFrHNc8ZMOZrWlP5rdTNO57q1rdUT33o3dZ0rrpZpxPD34HlhAqajZzZ/attc+SYtMfN5nmxG+6NbKip3qu+0eSyT70oy15KsMnDxKzgy92rep2caGmau9s63kgv9Reb9anfNt8o/D1nCt1YKy3YuUthAIGNuvdDsW0IjDRzZWIQefCUHM9ucLTA52+aEDFB7UBBPyVgFkNk1Ouh6rCXmGSQRllU/wAkFJn8Qm4rXkOINBh2DmQN0Ag35oIY72FNPLTgMtAAPPiidKCJu80tvNeBrgQRMOqP40VXOJHn6Ot6X+v6fus7Gl7g0bTsVzxG3WtPTGzqFKRmOBwsdzYgQVGclZhWvmraDlktGq0gBgFA3Ach/wCKj1100TempjywjwJs4cTi7A7E3E+udecrZS2P4fF5/wBQ776Ub7AiNpia0V2b5Wvb1+DymTDfq3PxR1oQN45pGyoKs4r/ABV7RqdSjNGBdBv/ADENpydDiAj7rCuN6tO+VM/2j8PUemfytfr+W61zV8IBAwt5pdYdotYCXGVigAce9KDma3D76zFOVvmhAxqgNooUE1aN5ZaLIwJZ7yyJhAjb0nMdbi40FRn4sKNNxIkEbwnbynlQN0Ag33oIiOMlNQ8ZwCWgODecuiZ+JBG3cxRLzXgc4kkx3Ek8fu0VXOJPn6Op6ZOur6fusuAq31Ov1HktC2ABa7WV8lkhDgU4lqm3dVtclMwRhOS3Y7OD6l3iUSWUqKK7t5C3kznGjC7Jbcc90JhEaOmO/aNMloJDYb8XNvGLkepTvkz8o/D1Hpv8rX6/luZUF8IBA2tLg+a7S/yFBy5bR99I33fNCBkCgxixRChOeaZbBylBEuc5zi5xzOZKDxAIBB0HoKa3cOPEoMZZCBPHTfoGV2YIde29DWigbMuoBxe7Rlvw26dr3Ct0zKzOg0OxbZyOpFz2Ug1ooTdXy3STINAodSna5Cahb0rfjt3czmd4lBxYdHFdCtnk8tdWMpmGSDkt1LIRXaM0eQ9XpEtNp+Yr/wBYa5HPneeZ+T0/p8a49Y+f5baVNdCAQNrS4Omu0v8AIUHK9tu99I/3fNCBmHIGU5F1j8I+C3yoG6AQCAQdC6CuAI3YwvWQY3MZjvfe3mmT6aMsxOm/BbUrVEggHYoTd0K3OpKHkFmLbaMtkhgACntUmxvHYC05LbWVTN3hER5erjkrtL9nDzYd2Jtkse0KU5dM4uP3QF1oOo0qWrDGQEsPMhLn579d9u5hr00iGzVpbQgEDa0uDprtL/IUHKVuO99pj7vmhAwixcDMvhcSBlxoBAIBAIOhdBXAEbsYXrIFLiCt77390n00ZRt4bMc91vitzVabLtZLSYyU8c7assnzhkrMKckHjapxLVaDV8IE7FtiytbHspChDkWLWbMdNKfY4ppftccXsVno4S0StQ2GsAQCBtafB032l/kKDk23He+0x93zQgioji5yDFAIBAIBB0LoK4AjdjC9ZArcL433v7pPpoyhfwnTyuMUZqleFuslZUUW3C15Tw7FbVSblKEZgkRmp7Q6WbBRYmUohSbJ/fBbHcrPRwlrTbCQCAQNbT4Nm+0v80oOSbwH32mB2PmhBGoBAIBAIBB0JoK4AjdjC9ZAvcH433w7pPpoyjbwlXyu72LRaqxWWcJtCpUrpG8nHEtyuScs7S0wWdnSyam0ZhSLJ/fBbHcrPRwlgbCQCAQNbT4Om+0v8hQcj2/wvMddvmNQR6AQCAQCAQdC6CuAI3YwvWQL6P8A433w7p/rRkZheyFHSe3rRRIhiZKhSQIRTQrXaW+kdieJY2n0smlSiWq0aUqx/wB79sdzM9HCU2mGw0ZCAQNbT4Omu0v8hQcj29wvMddvmNQR6AQLOZArQRXDnLaoE4gY0gMdiHLSiDFAIOhNBXAEbsYXrIHGj/44Xw7p/rRkF9O1NM7egIMwjBnOPwLRlnUrWKNwba0cq09bf0loT6rdSdtOSqn2LnpetjuZno4SsSqNiLAEAga2nwbN9pf5pQcj29wvMddvmNQR6AQCAQCAQdCaCuAI3YwvWQL6Pz/jC+HdJ9NGQX1zg3aVllkM9iwwzGxBDWpHwxQ2qocjJqXS42PdTEzIa2rjRVfarXsy0CbBpR1Vbw5NtV8Su3efrNLNrO/4zfRwleczJXptpshGsIBA2tFpfITLWipdBeB+BQci27nakZ3E4MI70IGCAQCAQCAQdC6CgRYEeo4oXrdKBW4VRfO9zSKOMwTTm10bpCzAvj2FxBbtpTNApDbhaAsDJ5wtPWWJnslWNyp9rTVZo5+NcLlZffeg4uL3DWFNvhRWRYeAuZWmMVCr0z9FotDbfDFomssTNuxPe7CHOOI4BQK3gy9Vtz8UowxqIhHXIia7SXasQGtJcA95CXajw4PNiIzzENprKoEAg8Iqg5/0h6MrZgWk6YsWRfOSbsmanNzG8TS3blsqK/YgphuXekHOwLQ8CUHntMvP9QWh4EoPRcq9RFRd60iO0lB57TLz/UFoeBKD0XLvQf8AQJ/wSB3Z2ju9k/MNgtsSahNJ30SNRgA65KDoi5V3xdqw2SRc18ZxxxnN2YqAUHMAAPHxoKzemxbwWHeWLea6cqyfEw2k3Il1C7YDSvWByzBByNUCDdIN5mtGt0d2oHcdI/8AYg9/aLeIbdHtq+G/sQYv0hXliNLWaPbUGW3WV9RRtG4SrOp3KEmL0XsiRS72kT7eZ0FhPjYuffg5LTuLx/jDpU5+OtddE/5Sai2rzn/ZVpmv2eqq/wDCZn9f2/7bo9WrH6PuN0L4TB1crcqeER2wxX0aOvkPKrOH0/2c97FvVu3u0+6+6OLqzthw5q0baex1pzp37WZiGK1pXlOX4Ac56Phx73m9ptbzK7oiEAgEEJaMtGm3757wyuTQaAIGe5B6p/fIPNxz1Tu+QG454i/vkBuOeqf3yA3Id1T++KBSFZsWC8PhxYjSOR5QT0q57oQ1nwhkTyoGs7LxZ2IYWtfChDaWZEoG/telOOJH7/8ARAe12T6uP3/6IA3ek6fDj9/+iBI2BLg5Pid9+ihM2+CeqvNwZfq4vfLHVZnpq93DhNNYcWM1w2EPWYmTpqkpHXNYYcZxcW7HHaVNrO0AgEAgTwjkQGEciAwjkQGEciAwjkQGEciAwjkQZNACD0AVQeoBAIMSFjQFnQE0AAVqgyQCD//Z",
      images: [
        "https://i.dummyjson.com/data/products/1/1.jpg",
        "https://i.dummyjson.com/data/products/1/2.jpg",
        "https://i.dummyjson.com/data/products/1/3.jpg",
        "https://i.dummyjson.com/data/products/1/4.jpg",
        "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      ],
      count: 0,
    },
    {
      id: 2,
      title: "iPhone X",
      description:
        "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      price: 899,
      discountPercentage: 17.94,
      rating: 4.44,
      stock: 34,
      brand: "Apple",
      category: "smartphones",
      thumbnail:
        "https://e7.pngegg.com/pngimages/450/269/png-clipart-space-gray-iphone-x-showing-ios-and-iphone-4-iphone-8-plus-iphone-5-iphone-x-iphone-apple-gadget-electronics-thumbnail.png",
      images: [
        "https://i.dummyjson.com/data/products/2/1.jpg",
        "https://i.dummyjson.com/data/products/2/2.jpg",
        "https://i.dummyjson.com/data/products/2/3.jpg",
        "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
      ],
      count: 0,
    },
    {
      id: 3,
      title: "Samsung Universe 9",
      description:
        "Samsung's new variant which goes beyond Galaxy to the Universe",
      price: 1249,
      discountPercentage: 15.46,
      rating: 4.09,
      stock: 36,
      brand: "Samsung",
      category: "smartphones",
      thumbnail:
        "https://admin.hyperce.io/assets/thumbnail__12__preview.jpg?w=800",
      images: ["https://i.dummyjson.com/data/products/3/1.jpg"],
      count: 0,
    },
    {
      id: 4,
      title: "OPPOF19",
      description: "OPPO F19 is officially announced on April 2021.",
      price: 280,
      discountPercentage: 17.91,
      rating: 4.3,
      stock: 123,
      brand: "OPPO",
      category: "smartphones",
      thumbnail:
        "https://gadgetshieldz.com/cdn/shop/files/oppo-f19-pro-plus-skins-thumbnail.webp?v=1698913505",
      images: [
        "https://i.dummyjson.com/data/products/4/1.jpg",
        "https://i.dummyjson.com/data/products/4/2.jpg",
        "https://i.dummyjson.com/data/products/4/3.jpg",
        "https://i.dummyjson.com/data/products/4/4.jpg",
        "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
      ],
      count: 0,
    },
    {
      id: 5,
      title: "Huawei P30",
      description:
        "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
      price: 499,
      discountPercentage: 10.58,
      rating: 4.09,
      stock: 32,
      brand: "Huawei",
      category: "smartphones",
      thumbnail:
        "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg?downsize=*:360",
      images: [
        "https://i.dummyjson.com/data/products/5/1.jpg",
        "https://i.dummyjson.com/data/products/5/2.jpg",
        "https://i.dummyjson.com/data/products/5/3.jpg",
      ],
      count: 0,
    },
  ]);

  return (
    <>
      <section
        className="h-100 h-custom"
        style={{ backgroundColor: "#d2c9ff" }}
      >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12">
              <div
                className="card card-registration card-registration-2"
                style={{ borderRadius: "15px" }}
              >
                <div className="card-body p-0">
                  <div className="row g-0">
                    <UserContext.Provider
                      value={{
                        itemCount,
                        setItemCount,
                        pricecount,
                        setPriceCount,
                      }}
                    >
                      <Card products={products} setProducts={setProducts} />
                      <Pricing />
                    </UserContext.Provider>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
