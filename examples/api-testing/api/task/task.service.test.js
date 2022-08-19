const { getAllTask, getOneTask } = require('./task.service')

describe('Task service', () => {
  describe('getAllTask', () => {
    test('should return an array of tasks', () => {
      // Arrange
      const expected = [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description 1',
          completed: true,
        }
      ]
      // Act
      const result = getAllTask()
      // Assert
      expect(result).toBeInstanceOf(Array)
      expect(result).toEqual(expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          description: expect.any(String),
          completed: expect.any(Boolean),
        })
      ]))
    })
  })

  describe('getOneTask', () => {
    test('should return a one task object', () => {
      // Arrange
      const taskId = 1
      const taskExpected = {
        id: 1,
        title: 'Task 1',
        description: 'Description 1',
        completed: true,
      }
      // Act
      const result = getOneTask(taskId)
      // Assert
      expect(result).toEqual(taskExpected)
    })

    test('should return null when task is not found', () => {
      // Arrange
      const taskId = 999
      // Act
      const result = getOneTask(taskId)
      // Assert
      expect(result).toBeNull()
    })
  })
})
