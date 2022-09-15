import prisma from '../lib/prisma';

const resolvers = {
  Query: {
    links: async () => await prisma.link.findMany(),
    link: async (_, { id }) => await prisma.link.findUnique({ where: { id } }),
  },
  Mutation: {
    createLink: async (_, { category, description, imageUrl, title, url }) => {
      const link = await prisma.link.create({
        data: {
          category,
          description,
          imageUrl,
          title,
          url,
        },
      });
      return link;
    },
    deleteLink: async (_, { id }) => {
      const link = await prisma.link.delete({ where: { id } });
      return link;
    },
    updateLink: async (_, { category, description, id, imageUrl, title, url }) => {
      const link = await prisma.link.update({
        data: {
          category,
          description,
          imageUrl,
          title,
          url,
        },
        where: { id },
      });
      return link;
    }
  },
}

export default resolvers
