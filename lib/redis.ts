import Redis from 'ioredis';

const redis = new Redis(`${process.env.REDIS_URL}`);

export const subscribe = async (email) => {
  const all = await redis.lrange('emails', 0, -1);
  if (all.includes(email)) {
    return false;
  } else {
    await redis.lpush('emails', email);
    return true;
  }
};
