import { Suspense } from "react";

type Album = {
  id: number;
  title: string;
  year: number;
};

type State<T> =
  | {
      type: "pending";
      promise: Promise<T>;
    }
  | {
      type: "fulfilled";
      result: T;
    }
  | {
      type: "rejected";
      error: unknown;
    };

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const getAlbums = async (): Promise<Album[]> => {
  await sleep(3000);

  return [
    {
      id: 13,
      title: "Let It Be",
      year: 1970,
    },
    {
      id: 12,
      title: "Abbey Road",
      year: 1969,
    },
  ];
};

class PromiseWrapper<T> {
  private state: State<T>;

  constructor(promise: Promise<T>) {
    const newPromise = promise
      .then((result) => {
        this.state = {
          type: "fulfilled",
          result: result,
        };
        return result;
      })
      .catch((error) => {
        this.state = {
          type: "rejected",
          error: error,
        };
        throw error;
      });
    this.state = {
      type: "pending",
      promise: newPromise,
    };
  }

  get(): T {
    switch (this.state.type) {
      case "pending": {
        throw this.state.promise;
      }
      case "fulfilled": {
        return this.state.result;
      }
      case "rejected": {
        throw this.state.error;
      }
    }
  }
}

let executingPromise: PromiseWrapper<Album[]> | undefined;

const fetchData = (): Album[] => {
  console.log("executingPromise", executingPromise);
  if (!executingPromise) {
    executingPromise = new PromiseWrapper(getAlbums());
  }
  return executingPromise.get();
};

const Albums: React.FC = () => {
  const data = fetchData();

  return (
    <div>
      {data.map((item) => (
        <ul key={item.id}>
          <li>
            {item.title}({item.year})
          </li>
        </ul>
      ))}
    </div>
  );
};

const BasicSuspense: React.FC = () => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Albums />
    </Suspense>
  );
};

export default BasicSuspense;
