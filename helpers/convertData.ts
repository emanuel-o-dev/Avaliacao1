const convertData = (oldData: any) => {
  const newData: Array<any> = [];

  const origin = new Set(oldData.map((od: any) => od.origin));
  const destination = new Set(oldData.map((od: any) => od.destination));

  origin.forEach((c: any) => {
    newData.push({
      title: c,
      data: oldData.filter((od: any) => od.origin == c || od.destination == c),
    });
  });
  destination.forEach((c: any, index: any) => {
    if (!newData.some((item) => item.title == c)) {
      newData.push({
        title: c,
        data: oldData.filter(
          (od: any) => od.origin == c || od.destination == c
        ),
      });
    }
  });

  return newData.sort((a, b) => a.title.localeCompare(b.title));
};

export default convertData;
